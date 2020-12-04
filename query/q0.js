// Task 0 (Building your first query)

db.ratings.aggregate([

// Match documents with certain timestamps
        // exercice 1
    /* {
        $match: {
            timestamp: {
                $gte:  838857600, // >= 838857600
                $lt: 849398400    //  < 849398400
            }
        }
    }*/

    // Exercice 2
    // Match documents with certain timestamps
      /*
        {$match: {timestamp: { $gte:  838857600, $lt: 849398400}}},
        // Perform an aggregation
        {
            $group: {
                _id: "$movieId", // Group by the field movieId
                min_rating: {$min: "$rating"}, // Get the max rating for each group
                max_rating: {$max: "$rating"}, // Get the min rating for each group
                count: {$sum: 1} // Get the count for each group
            }
         }
         */
            // exercice 3
          // Match documents with certain timestamps
            /*{$match: {timestamp: { $gte:  838857600, $lt: 849398400}}},
             // Perform an aggregation
             {
                 $group: {
                     _id: "$movieId", // Group by the field movieId
                     min_rating: {$min: "$rating"}, // Get the max rating for each group
                     max_rating: {$max: "$rating"}, // Get the min rating for each group
                     count: {$sum: 1} // Get the count for each group
                 }
              },
              // Sort in descending order of count, break ties by ascending order of _id
              {$sort: {"count": 1, "_id": 1}},
              // Limit to only the first 10 documents
              {$limit: 5}
*/
              //exercice 4
// Match documents with certain timestamps
    {$match: {timestamp: { $gte:  838857600, $lt: 849398400}}},
    // Perform an aggregation
    {
        $group: {
            _id: "$movieId", // Group by the field movieId
            min_rating: {$min: "$rating"}, // Get the max rating for each group
            max_rating: {$max: "$rating"}, // Get the min rating for each group
            count: {$sum: 1} // Get the count for each group
        }
     },
     // Sort in descending order of count, break ties by ascending order of _id
     {$sort: {"count": -1, "_id": 1}},
     // Limit to only the first 10 documents
     {$limit: 10},
     // Perform a "lookup" on a different collection
     {
         $lookup: {
             from: "movies_metadata", // Search inside movies_metadata
             localField: "_id", // match our _id
             foreignField: "movieId", // with the "movieId" in movies_metadata
             as: "movies" // Put matching rows into the field "movies"
         }
     }
]);
