class Api::V1::BooksController < ApplicationController
    # before_action :set_book
    def index
        @books = Book.all
        render json: @books
      end
    
      def show
        if @book 
            render json: @book
        else
            render json: @book
        end   

        @book = Book.find(params[:id])
      end
      
      def new
        @book = Book.new
      end
    
      def create
        @book = Book.new(book_params)
    
        if @book.save
        #   redirect_to @book
        render json: @book
        else
        #   render :new, status: :unprocessable_entity
        render json: @book.errors
        end
      end
    
      def edit
        @book = Book.find(params[:id])
      end
    
      def update
        @book = Book.find(params[:id])
    
        if @book.update(book_params)
          redirect_to @book
        else
          render :edit, status: :unprocessable_entity
        end
      end
      def destroy
        @book.destroy
    
        render json: { notice: 'Book was successfully removed.' }
      end
      private
        def book_params
          params.require(:book).permit(:name, :author, :rating)
        end
        def set_book
            @book = Book.find(params[:id])
          end
end
