class Book < ApplicationRecord
    validates :name,:rating,:author, presence: true
end
