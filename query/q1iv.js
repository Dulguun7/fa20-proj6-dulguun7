// Task 1iv

db.ratings.aggregate([
    { $match: { userId: 186 } },
    { $sort: { timestamp: -1 } },
    { $limit: 5 },
    { $group: { _id: null, ratings: { $push: "$rating" }, timestamps: { $push: "$timestamp" }, movieIds: { $push: "$movieId" } } },
    { $project: { _id: 0 } }
]);