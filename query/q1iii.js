// Task 1iii

db.ratings.aggregate([
    { $group: { _id: "$rating", added: { $sum: 1 } } },
    { $sort: { _id: -1 } },
    { $project: { count: "$added", _id: 0, rating: "$_id" } }
]);