class Conversation < ApplicationRecord
    has_many :user_conversations, dependent: :destroy
    has_many :users, through: :user_conversations
    has_many :messages, dependent: :destroy
    accepts_nested_attributes_for :messages, allow_destroy: true
    # belongs_to :user
    validates_presence_of :sender_id,:recipient_id
    validates_uniqueness_of :sender_id, scope: :recipient_id



    scope :between, -> (sender_id, recipient_id) do 
        where("(sender_id = ? AND recipient_id = ?) OR (sender_id = ? recipient_id = ?)", sender_id, recipient_id)
    end
    # depends who begins the conversation, need to assign who is the recipient and sender 

end