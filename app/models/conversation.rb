class Conversation < ApplicationRecord
    has_many :messages, dependent: :destroy
    accepts_nested_attributes_for :messages, allow_destroy: true

    validates_presence_of :sender_id, :recipient_id
    validates_uniqueness_of :sender_id, scope: :recipient_id

    

    scope :between, -> (sender_id, recipient_id) do 
        where("(sender_id = ? AND recipient_id = ?) OR (sender_id = ? recipient_id = ?)", sender_id, recipient_id)
    end
    # depends who begins the conversation, need to assign who is the recipient and sender 

end