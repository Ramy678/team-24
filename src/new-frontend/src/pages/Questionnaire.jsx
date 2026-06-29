import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CUISINE_OPTIONS = [
  'Italian', 'Japanese', 'Mexican', 'Chinese', 'Indian',
  'French', 'Thai', 'Greek', 'Spanish', 'Korean',
];

const INGREDIENTS = [
  'Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Tofu',
  'Eggs', 'Milk', 'Cheese', 'Butter', 'Gluten', 'Nuts',
  'Peanuts', 'Soy', 'Shellfish', 'Garlic', 'Onion',
  'Mushrooms', 'Tomatoes', 'Spicy',
];

function Questionnaire() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ cuisine: '', likes: [], dislikes: [], allergies: [] });
  const [noAllergies, setNoAllergies] = useState(false);
  const [error, setError] = useState('');

  const toggle = (ingredient, type) => {
    setFormData(prev => {
      const list = prev[type];
      return {
        ...prev,
        [type]: list.includes(ingredient) ? list.filter(i => i !== ingredient) : [...list, ingredient],
      };
    });
    setError('');
  };

  const isSelected = (ingredient, type) => formData[type].includes(ingredient);

  const handleNoAllergies = () => {
    setNoAllergies(true);
    setFormData(prev => ({ ...prev, allergies: [] }));
    setError('');
  };

  const handleAllergyToggle = (ingredient) => {
    setNoAllergies(false);
    toggle(ingredient, 'allergies');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cuisine) {
      setError('Please select a cuisine type.');
      return;
    }
    if (!noAllergies && formData.allergies.length === 0) {
      setError('Please select your allergies or click "No allergies".');
      return;
    }
    localStorage.setItem('orderly_preferences', JSON.stringify({
      cuisine: formData.cuisine,
      likes: formData.likes,
      dislikes: formData.dislikes,
      allergies: noAllergies ? [] : formData.allergies,
    }));
    navigate('/upload');
  };

  const handleReset = () => {
    setFormData({ cuisine: '', likes: [], dislikes: [], allergies: [] });
    setNoAllergies(false);
    setError('');
  };

  return (
    <div className="upload-page">
      <div className="upload-container" style={{ maxWidth: 800 }}>
        <h2>Your Food Preferences</h2>
        <p className="subtitle">Step 1 of 3 — Tell us your taste so we can find the perfect dish</p>

        <form onSubmit={handleSubmit} className="preferences-form">
          <div className="form-group">
            <label className="form-label">Cuisine <span className="required">*</span></label>
            <select
              value={formData.cuisine}
              onChange={e => { setFormData({ ...formData, cuisine: e.target.value }); setError(''); }}
              className="form-select"
            >
              <option value="">Select a cuisine...</option>
              {CUISINE_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Allergies <span className="required">*</span></label>
            <p className="hint">Select all ingredients you're allergic to</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ing => (
                <button
                  key={ing}
                  type="button"
                  className={`chip ${isSelected(ing, 'allergies') ? 'chip-active-danger' : 'chip-inactive'}`}
                  onClick={() => handleAllergyToggle(ing)}
                >
                  {ing}
                </button>
              ))}
            </div>
            <button
              type="button"
              className={`btn-none ${noAllergies ? 'chip-active-like' : ''}`}
              onClick={handleNoAllergies}
              style={{ marginTop: 8 }}
            >
              {noAllergies ? 'No allergies ✓' : 'No allergies'}
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Dislikes <span className="optional">(optional)</span></label>
            <p className="hint">Select ingredients you don't like</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ing => (
                <button
                  key={ing}
                  type="button"
                  className={`chip ${isSelected(ing, 'dislikes') ? 'chip-active-dislike' : 'chip-inactive'}`}
                  onClick={() => toggle(ing, 'dislikes')}
                >
                  {ing}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Likes <span className="optional">(optional)</span></label>
            <p className="hint">Select ingredients you particularly enjoy</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ing => (
                <button
                  key={ing}
                  type="button"
                  className={`chip ${isSelected(ing, 'likes') ? 'chip-active-like' : 'chip-inactive'}`}
                  onClick={() => toggle(ing, 'likes')}
                >
                  {ing}
                </button>
              ))}
            </div>
          </div>

          {error && <div className="message error">{error}</div>}

          <div className="form-actions">
            <button type="submit" className="submit-btn">Next: Upload Menu →</button>
            <button type="button" className="remove-btn" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questionnaire;
