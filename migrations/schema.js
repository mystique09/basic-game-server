const databaseSchema = `
CREATE TABLE ?? (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	rank INT NOT NULL,
	score INT NOT NULL
)
`;
module.exports = {
	databaseSchema
};