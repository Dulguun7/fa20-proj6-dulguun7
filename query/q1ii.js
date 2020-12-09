// Task 1ii

db.movies_metadata.aggregate([
    { $match: { vote_count: { $gte: 50 }, genres: { $elemMatch: { name: "Comedy" } } } },
    { $sort: { vote_average: -1, vote_count: -1, movieId: 1 } },
    { $project: { title: 1, vote_count: 1, vote_average: 1, movieId: 1, _id: 0 } },
    { $limit: 50 }
]);