/*
 Copyright [2016] [Relevance Lab]

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var mongoose = require('mongoose');
var util = require('util');
var Schema = mongoose.Schema;

var CompositeBlueprintSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    organizationId: {
        type: String,
        required: true,
        trim: false
    },
    bgId: {
        type: String,
        required: true,
        trim: false
    },
    projectId: {
        type: String,
        required: true,
        trim: false
    },
    blueprints: [{
        type: Schema.Types.Mixed,
        _id: false
    }],
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
});

CompositeBlueprintSchema.statics.createNew = function createNew(data, callback) {
    var self = this;
    var CompositeBlueprint = new self(data);
    CompositeBlueprint.save(function (err, data) {
        if (err) {
            logger.error(err);
            return callback(err);
        } else {
            return callback(null, CompositeBlueprint);
        }
    });
};

var CompositeBlueprints = mongoose.model('composite-blueprints', CompositeBlueprintSchema);
module.exports = CompositeBlueprints;
