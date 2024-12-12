import React, { useState } from 'react';
import './gforum.css';

const GovernmentForum = () => {
  

  return (
    <div className="background-container">
    <div className="forum-container">
      <div className="form-group">
        <label htmlFor="name" className="label">Name:</label>
        <input type="text" id="name" className="input" />
      </div>
      <div className="form-group">
        <label htmlFor="designation" className="label">Affiliation:</label>
        <select id="designation" className="select">
          <option value="sc">Supreme Court</option>
          <option value="hc">HIgh Court</option>
          <option value="cc">Civil Court</option>
          <option value="cric">Criminal Court</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="grievance" className="label">Grievance:</label>
        <textarea id="grievance" className="textarea"></textarea>
        <p>Please keep the above within 200 words.</p>
      </div>
      <div className="form-group">
        <label className="label"></label>
        <div className="yes-no-container1">
            <h4>Do you want to transfer your case to higher authorities ?</h4>
          <button className="yes-no-btn">Yes</button>
          <button className="yes-no-btn">No</button>
        </div>
      </div>

    
      <div className="w-full"><button className="send-button"><a href="https://mail.google.com/mail/u/0/#inbox?compose=newhttps://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhnRlzNcMdLfRcvGZXMqtHBvlpKKgFvTtcDKknMnWDQlpDBwhWwhtFRRwTNJRMNQXDZL"></a>SEND</button></div>
    </div>
    </div>
  );
};

export default GovernmentForum;
