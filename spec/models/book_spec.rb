require 'rails_helper'

RSpec.describe Book, type: :model do
    before(:all) do
        @book = Book.create!(name: "The Lies of Locke Lamora!", author: "Scott Lynch", rating: 4)
    end

    describe "check that a @book instance was created" do
        context "Test Create" do
          it "checks that a book can be created in the database" do
            expect(@book).to be_valid
          end
        end
      end

      describe "check that a @book instance can be read" do
        context "Test Read" do
          it "checks that a book can be read from the database" do
            expect(Book.find_by_name("The Lies of Locke Lamora!")).to eq(@book)
          end
        end
      end

      describe "check that a @book instance can be updated" do
        context "Test Update" do
          it "checks that a book can be updated in the database" do
            @book.update(:name=>"Six of Crows")
            expect(Book.find_by_name("Six of Crows")).to eq(@book)
          end
        end
      end

      describe "check that a @book instance can be deleted" do
        context "Test Delete" do
          it "deletes a book from the database" do
            @book.destroy
            expect(Book.find_by_name("Six of Crows")).to be_nil
          end
        end
      end
end