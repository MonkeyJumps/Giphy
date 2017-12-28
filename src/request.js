'use strict';
import fetch from 'isomorphic-fetch';

export function Request(endpoint, onSuccess, onError) {
    fetch(endpoint) 
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            onSuccess(json);
        })
        .catch(function (err) {
            onError(err);
        });
}