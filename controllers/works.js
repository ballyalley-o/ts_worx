"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWorkQueue = exports.updateWorkQueue = exports.addWorkQueue = exports.getWorkQueue = void 0;
let works = [];
const getWorkQueue = (req, res, next) => {
    res.status(200).json({ message: 'SUCCESS', queue: works });
};
exports.getWorkQueue = getWorkQueue;
const addWorkQueue = (req, res, next) => {
    const work = {
        id: new Date().toISOString(),
        job: req.body.job,
        name: req.body.name,
        task: req.body.task
    };
    works.push(work);
    res.status(201).json({ message: "SUCCESS", queue: work });
};
exports.addWorkQueue = addWorkQueue;
const updateWorkQueue = (req, res, next) => {
    const workId = req.params.id;
    const workIndex = works.findIndex(work => work.id === workId);
    if (workIndex >= 0) {
        // only update the fields that are provided in the request body
        works[workIndex] = {
            id: works[workIndex].id,
            job: req.body.job || works[workIndex].job,
            name: req.body.name || works[workIndex].name,
            task: req.body.task || works[workIndex].task
        };
        return res.status(201).json({ message: "UPDATED", queue: works });
    }
    res
        .status(404)
        .json({ message: 'NOT FOUND' });
};
exports.updateWorkQueue = updateWorkQueue;
const deleteWorkQueue = (req, res, next) => {
    const workId = req.params.id;
    works = works.filter(work => work.id !== workId);
    res
        .status(200)
        .json({ message: 'REMOVED', queue: workId });
};
exports.deleteWorkQueue = deleteWorkQueue;
