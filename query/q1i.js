// Task 1i

db.keywords.aggregate([
    { $match: { keywords: { $elemMatch: { $or: [{name: "presidential election"}, {name: "time travel"}] } } } },
    { $project: { _id: 0, movieId: 1 } },
    { $sort: { movieId: 1 } }
]);