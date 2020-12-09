// Task 2ii

db.movies_metadata.aggregate([
    { $project: { _id: 0, tagline: { $split: ["$tagline", " "] } } },
    { $unwind: "$tagline" },
    { $project: { _id: 0, tagline: { $toLower: { $trim: { input: "$tagline", chars: "!?.," } } }, length: { $strLenCP: "$tagline" } } },
    { $match: { length: { $gt: 3 } } },
    { $group: { _id: "$tagline", tagline: { $first: "$tagline" }, count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $project: { _id: "$tagline", count: 1 } },
    { $limit: 20 }
]);