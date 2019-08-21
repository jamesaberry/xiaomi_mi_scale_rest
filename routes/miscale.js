const express = require('express');
const router = express.Router();
const ScaleEntry = require('../models/ScaleEntry');

router.get('/', async (req, res) => {
    try {
        const scaleEntries = await ScaleEntry.find();
        res.json(scaleEntries);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const scaleEntries = await ScaleEntry.findById(req.params.id);
        res.json(scaleEntries);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const removed = await ScaleEntry.remove({_id: params.id});
        res.json(removed);
    } catch (err) {
        res.json({ message: err });
    }
    
});

router.patch('/:id', async (req, res) => {
    try {
        const updated = await ScaleEntry.updateOne(
            {_id: params.id}, 
            {$set: {
                user: req.body.user,
                weight: req.body.weight,
                bmi: req.body.bmi,
                basal_metabolism: req.body.basal_metabolism,
                visceral_fat: req.body.visceral_fat,
                timestamp: req.body.timestamp
            }});
        res.json(updated);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const scaleEntry = new ScaleEntry({
        user: req.body.user,
        weight: req.body.weight,
        bmi: req.body.bmi,
        basal_metabolism: req.body.basal_metabolism,
        visceral_fat: req.body.visceral_fat,
        timestamp: req.body.timestamp
    });
    try {
        const savedScaleEntry = await scaleEntry.save();
        res.json(savedScaleEntry);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;