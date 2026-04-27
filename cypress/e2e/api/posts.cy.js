describe("API Tests - JSONPlaceholder Posts", () => {
  const apiUrl = "https://jsonplaceholder.typicode.com";

  it("GET - Deve retornar a lista de posts com status 200", () => {
    cy.request(`${apiUrl}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("content-type");
      expect(response.headers["content-type"]).to.include("application/json");

      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("GET - Deve retornar um post específico com status 200", () => {
    cy.request(`${apiUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
    });
  });
});


  
