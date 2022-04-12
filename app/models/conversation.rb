class Conversation < ApplicationRecord
    has_many :messages, dependent: :destroy
    accepts_nested_attributes_for :messages, allow_destroy: true
    belongs_to :user
    validates_presence_of :user_id, :recipient_id
    validates_uniqueness_of :user_id, scope: :recipient_id


    

    # scope :between, -> (user_id, recipient_id) do 
    #     where("(user_id = ? AND recipient_id = ?) OR (user_id = ? recipient_id = ?)", user_id, recipient_id)
    # end
    # depends who begins the conversation, need to assign who is the recipient and sender 

end