// Task 2i

db.movies_metadata.aggregate([
    { $project: {
            score: { $round: [{ $add: [{ $multiply: [{ $divide: [ "$vote_count", { $add: ["$vote_count", 1838] } ] }, "$vote_average"] },
                            { $multiply: [{ $divide: [ 1838, { $add: ["$vote_count", 1838] } ] }, 7] }] }, 2] },
            vote_count: 1,
            title: 1
        }
    },
    { $sort: { score: -1, vote_count: -1, title: 1 } },
    { $project: { _id: 0 } },
    { $limit: 20 }
]);