import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const API_BASE_URL = 'https://team-24-1.onrender.com';

const CUISINE_OPTIONS = [
  'Italian',
  'Japanese',
  'Mexican',
  'Chinese',
  'Indian',
  'French',
  'Thai',
  'Greek',
  'Spanish',
  'Korean'
];

const INGREDIENTS = [
  'Chicken',
  'Beef',
  'Pork',
  'Fish',
  'Shrimp',
  'Tofu',
  'Eggs',
  'Milk',
  'Cheese',
  'Butter',
  'Gluten',
  'Nuts',
  'Peanuts',
  'Soy',
  'Shellfish',
  'Garlic',
  'Onion',
  'Mushrooms',
  'Tomatoes',
  'Spicy'
];

function FoodRecommenderForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({cuisine: '', likes: [], dislikes: [], allergies: [], maxBudget: ''});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [budgetError, setBudgetError] = useState('');
  const [noDishesMessage, setNoDishesMessage] = useState('');

  const validateBudget = (value) => {
    setBudgetError('');
    
    if (value === '' || value === null || value === undefined) {
      return true;
    }
    
    const numValue = parseFloat(value);
    
    if (isNaN(numValue)) {
      setBudgetError('Please enter a valid number');
      return false;
    }
    
    if (numValue <= 0) {
      setBudgetError('Budget must be greater than 0');
      return false;
    }
    
    return true;
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    
    if (value === '') {
      setFormData({ ...formData, maxBudget: '' });
      setBudgetError('');
      return;
    }
    
    const regex = /^\d*\.?\d*$/;
    if (!regex.test(value)) {
      setBudgetError('Only numbers and decimal point allowed');
      return;
    }
    
    const isValid = validateBudget(value);
    if (isValid || value === '') {
      setFormData({ ...formData, maxBudget: value });
    }
  };

  const handleCuisineChange = (e) => {
    setFormData({...formData, cuisine: e.target.value});
    setError('');
  };

  const handleIngredientToggle = (ingredient, type) => {
    setFormData(prev => {
      const currentList = prev[type] || [];
      const updatedList = currentList.includes(ingredient) ? currentList.filter(item => item !== ingredient) : [...currentList, ingredient];
      
      return {...prev, [type]: updatedList};
    });
    setError('');
  };

  const isIngredientSelected = (ingredient, type) => {
    return (formData[type] || []).includes(ingredient);
  };

  const validateForm = () => {
    if (!formData.cuisine) {
      setError('Please select a cuisine type.');
      return false;
    }
    if (formData.allergies.length === 0) {
      setError('Please select at least one allergy (or "None" option).');
      return false;
    }

    if (formData.maxBudget && !validateBudget(formData.maxBudget)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const preferences = {cuisine: formData.cuisine, likes: formData.likes || [], dislikes: formData.dislikes || [], allergies: formData.allergies || [], max_budget: formData.maxBudget ? parseFloat(formData.maxBudget) : null};

      const response = await fetch(`${API_BASE_URL}/recommendations`, {method: 'POST', headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({preferences: preferences})
      });

      if (!response.ok) {
        let errorMsg = 'Failed to save preferences';
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      const data = await response.json();

      if (data.recommendations && data.recommendations.length === 0) {
        const budgetValue = formData.maxBudget || 'current';
        setNoDishesMessage(`No dishes under $${budgetValue}. Try raising your budget.`);
        setSubmitting(false);
        return;
      }

      localStorage.setItem('sessionId', data.sessionId);
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      
      setSuccess(true);

      setTimeout(() => {navigate('/upload');}, 1500);

    } catch (err) {
      console.error('Submission failed:', err);
      setError(err.message || 'Failed to save preferences. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      cuisine: '',
      likes: [],
      dislikes: [],
      allergies: [],
      maxBudget: ''
    });
    setError('');
    setSuccess(false);
    setBudgetError('');
    setNoDishesMessage('');
  };

  const handleNoAllergies = () => {
    setFormData(prev => ({...prev, allergies: []}));
    setError('');
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h2>Food Preferences</h2>
        <p className="subtitle">
          Tell us about your preferences to get personalized recommendations
        </p>

        <form onSubmit={handleSubmit} className="preferences-form">
          <div className="form-group">
            <label className="form-label">
              Cuisine <span className="required">*</span>
            </label>
            <select
              value={formData.cuisine}
              onChange={handleCuisineChange}
              className="form-select"
              disabled={submitting}
            >
              <option value="">Select a cuisine...</option>
              {CUISINE_OPTIONS.map(cuisine => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Allergies <span className="required">*</span>
            </label>
            <p className="hint">Select all ingredients you're allergic to</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ingredient => (
                <button
                  key={ingredient}
                  type="button"
                  className={`chip ${isIngredientSelected(ingredient, 'allergies') ? 'chip-active-danger' : 'chip-inactive'}`}
                  onClick={() => handleIngredientToggle(ingredient, 'allergies')}
                  disabled={submitting}
                >
                  {ingredient}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn-none"
              onClick={handleNoAllergies}
              disabled={submitting}
              style={{ marginTop: '8px' }}
            >
              No allergies
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">
              Dislikes <span className="optional">(optional)</span>
            </label>
            <p className="hint">Select ingredients you don't like</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ingredient => (
                <button
                  key={ingredient}
                  type="button"
                  className={`chip ${isIngredientSelected(ingredient, 'dislikes') ? 'chip-active-dislike' : 'chip-inactive'}`}
                  onClick={() => handleIngredientToggle(ingredient, 'dislikes')}
                  disabled={submitting}
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Likes <span className="optional">(optional)</span>
            </label>
            <p className="hint">Select ingredients you particularly enjoy</p>
            <div className="ingredients-grid">
              {INGREDIENTS.map(ingredient => (
                <button
                  key={ingredient}
                  type="button"
                  className={`chip ${isIngredientSelected(ingredient, 'likes') ? 'chip-active-like' : 'chip-inactive'}`}
                  onClick={() => handleIngredientToggle(ingredient, 'likes')}
                  disabled={submitting}
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Max Budget <span className="optional">(optional)</span>
            </label>
            <p className="hint">Set a maximum budget for your meal recommendations</p>
            <div className="budget-input-wrapper">
              <input
                type="text"
                id="maxBudget"
                placeholder="e.g., 15"
                value={formData.maxBudget || ''}
                onChange={handleBudgetChange}
                className={`form-input budget-input ${budgetError ? 'input-error' : ''}`}
                disabled={submitting}
              />
              <span className="currency-suffix">$</span>
            </div>
            {budgetError && <span className="error-message">{budgetError}</span>}
          </div>

          {error && (
            <div className="message error">
              {error}
            </div>
          )}
          
          {success && (
            <div className="message info">
              Preferences saved! Redirecting to upload menu...
            </div>
          )}

          {noDishesMessage && (
            <div className="message warning">
              {noDishesMessage}
            </div>
          )}


          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={submitting}
            >
              {submitting ? 'Saving...' : 'Get Recommendations'}
            </button>
            
            <button
              type="button"
              className="remove-btn"
              onClick={handleReset}
              disabled={submitting}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoodRecommenderForm;