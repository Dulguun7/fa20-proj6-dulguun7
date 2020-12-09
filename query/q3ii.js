// Task 3ii

db.credits.aggregate([
    { $match: { crew: { $elemMatch: { id: 5655, job: "Director" } } } },
    { $unwind: "$cast" },
    { $group: { _id: "$cast.name", cast_id: { $first: "$cast.id" }, count: { $sum: 1 } } },
    { $sort: { count: -1, cast_id: 1 } },
    { $project: { count: 1, name: "$_id", id: "$cast_id", _id: 0 } },
    { $limit: 5 }
]);