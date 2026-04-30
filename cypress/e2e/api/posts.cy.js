describe("API Tests - JSONPlaceholder Posts", () => {
    const apiUrl = Cypress.env("apiUrl");
  
    it("GET - Deve retornar a lista de posts com status 200", () => {
      cy.request(`${apiUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property("content-type");
        expect(response.headers["content-type"]).to.include("application/json");
  
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
  
        expect(response.body[0]).to.have.property("userId");
        expect(response.body[0]).to.have.property("id");
        expect(response.body[0]).to.have.property("title");
        expect(response.body[0]).to.have.property("body");
      });
    });
  
    it("GET - Deve retornar um post específico com status 200", () => {
      cy.request(`${apiUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("userId");
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("body");
      });
    });
  
    it("POST - Deve criar um novo post com payload válido", () => {
      const newPost = {
        title: "Teste Outsera",
        body: "Criando um post via Cypress",
        userId: 1
      };
  
      cy.request({
        method: "POST",
        url: `${apiUrl}/posts`,
        body: newPost
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.title).to.eq(newPost.title);
        expect(response.body.body).to.eq(newPost.body);
        expect(response.body.userId).to.eq(newPost.userId);
      });
    });
  
    it("PUT - Deve atualizar um post existente", () => {
      const updatedPost = {
        id: 1,
        title: "Post atualizado",
        body: "Conteúdo atualizado no teste",
        userId: 1
      };
  
      cy.request({
        method: "PUT",
        url: `${apiUrl}/posts/1`,
        body: updatedPost
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(updatedPost.title);
        expect(response.body.body).to.eq(updatedPost.body);
        expect(response.body.userId).to.eq(updatedPost.userId);
      });
    });
  
    it("DELETE - Deve deletar um post existente", () => {
      cy.request({
        method: "DELETE",
        url: `${apiUrl}/posts/1`
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("GET negativo - Deve retornar 404 para post inexistente", () => {
      cy.request({
        method: "GET",
        url: `${apiUrl}/posts/999999`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    it("Performance API - Deve responder em tempo aceitável", () => {
      cy.request(`${apiUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(2000);
      });
    });
  });
  