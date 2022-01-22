const assert = require('assert');
const ID3 = require('../lib/decision-tree');

const SAMPLE_DATASET = require('data/sample.json');
const SAMPLE_DATASET_CLASS_NAME = 'liked';

describe('ID3 Decision Tree Basics', function() {
  const dt = new ID3(SAMPLE_DATASET_CLASS_NAME, SAMPLE_DATASET.features);

  it('should initialize & train for the three argument constructor', function() {
    assert.ok(dt);
  });

  it('should train on the dataset', function() {
    dt.train(SAMPLE_DATASET.data);
    assert.ok(dt.toJSON());
  });

  it('should predict on a sample instance', function() {
    const sample = SAMPLE_DATASET.data[0];
    const predicted_class = dt.predict(sample);
    const actual_class = sample[SAMPLE_DATASET_CLASS_NAME];
    assert.strictEqual(predicted_class, actual_class);
  });
});
