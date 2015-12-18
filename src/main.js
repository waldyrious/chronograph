// main.js
const React = require('react');
const ReactDOM = require('react-dom');
const AppBar = require('material-ui/lib/app-bar');
const TimeEntryForm = require('./time-entry-form');
const TimeStats = require('./time-stats');

ReactDOM.render(
    <div>
        <AppBar title="chronograph" />
        <TimeStats />
        <TimeEntryForm />
    </div>,
  document.getElementById('container')
);
