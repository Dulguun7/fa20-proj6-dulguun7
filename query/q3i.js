// Task 3i

db.credits.aggregate([
    { $unwind: "$cast" },
    { $match: { "cast.id": 7624 } },
    { $project: { movieId: 1, character: "$cast.character" } },
    { $lookup: { from: "movies_metadata", localField: "movieId", foreignField: "movieId", as: "meta" } },
    { $unwind: "$meta" },
    { $project: { title: "$meta.title", release_date: "$meta.release_date", character: "$character", _id: 0 } },
    { $sort: { release_date: -1 } }
]);