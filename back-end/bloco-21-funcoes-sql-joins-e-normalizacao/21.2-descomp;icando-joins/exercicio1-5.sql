SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;
SELECT * FROM pixar.theater;

SELECT m.title, b.domestic_sales, b.international_sales FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON movie_id = id;
SELECT m.title, b.domestic_sales, b.international_sales FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON movie_id = id
WHERE domestic_sales < international_sales;
SELECT m.title, b.rating FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON movie_id = id
ORDER BY b.rating DESC;
SELECT * FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m
ON m.theater_id = t.id
ORDER BY t.name;
SELECT * FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS m
ON m.theater_id = t.id
ORDER BY t.name;
