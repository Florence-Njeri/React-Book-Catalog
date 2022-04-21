require 'spec_helper'

RSpec.describe "routes for Books Controller", type: :routing do
    it "routes /books action to  books controller" do
        expect(get("/books")).to route_to("books#index")
      end

      it "routes /books/new action to books controller " do
        expect(get("/books/new")).to route_to("books#new")
      end

      it "routes /books/:id/edit action to books controller " do
        expect(get("/books/:id/edit")).to route_to(controller: 'books',
            action: 'edit',
            id: ':id')
      end

      it "routes /books/:id action to books controller " do
        expect(get("/books/:id")).to route_to(controller: 'books',
            action: 'show',
            id: ':id')
      end

      it "routes /books/:id action to books controller " do
        expect(get("/books/:id/edit")).to route_to(controller: 'books',
            action: 'edit',
            id: ':id')
      end

      it "routes /books/:id action to books controller " do
        expect(get("/books/:id/edit")).to route_to(controller: 'books',
            action: 'edit',
            id: ':id')
      end
end