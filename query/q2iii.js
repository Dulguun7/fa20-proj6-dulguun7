// Task 2iii

db.movies_metadata.aggregate([
    { $project: { budget: {
                $cond: [{ $ne: ["$budget", null] }, {
                        $cond: [{ $ne: ["$budget", false] }, {
                                $cond: [{ $ne: ["$budget", undefined] }, {
                                        $cond: [{ $ne: ["$budget", ""] }, {
                                                $cond: [{ $isNumber: "$budget" },
                                                    { $round: [{ $toInt: "$budget" }, -7] },
                                                    { $round: [{ $toInt: { $trim: { input: "$budget", chars: " USD$" } } }, -7] } ]},
                                                "unknown"]
                                        }, "unknown"]
                            }, "unknown"]
                    }, "unknown"]
            }
        }
    },
    { $project: { budget: { $cond: [{ $isNumber: "$budget" }, "$budget", "unknown" ]} } },
    { $group: { _id: "$budget", count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
    { $project: { budget: "$_id", count: 1, _id: 0 } },
]);