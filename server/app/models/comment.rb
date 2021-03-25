class Comment < ApplicationRecord
    validates :userName, presence: true
    validates :bodyText, presence: true
end
