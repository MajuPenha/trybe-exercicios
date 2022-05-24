SELECT 'this is SQL Exercise, Practice and Solution';
SELECT 2, 4, 5;
SELECT 10 + 15;
SELECT 23 + 43 / 10;
SELECT * FROM Scientists;
SELECT Name, Hours FROM Scientists.Projects;
SELECT Name From Scientists.Projects ORDER BY Name ASC;
SELECT Name From Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT ('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 5;
USE Scientist;
SELECT CONCAT('Existem ', COUNT(DISTINCT Name), ' cientistas na tabela Scientists') FROM Projects;