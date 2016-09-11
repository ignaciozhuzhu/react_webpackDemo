﻿// app.js

import $ from 'jquery';
import React from 'react';
import {
	render
} from 'react-dom';
import '../css/app.css'

import NewsList from './NewsList.js';

render(<NewsList />, $('#content')[0]);

/*function get(url) {
	return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function(stories) {
	return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
	render(<NewsList items={items} />, $('#content')[0]);
}).catch(function(err) {
	console.log('error occur', err);
});*/