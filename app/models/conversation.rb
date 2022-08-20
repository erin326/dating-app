class Conversation < ApplicationRecord

    # before_validation :sort_user_ids

    # has_many :user_conversations, dependent: :destroy
    has_many :users
    belongs_to :sender, class_name: 'User'
    belongs_to :recipient, class_name: 'User'
    has_many :messages, dependent: :destroy
    accepts_nested_attributes_for :messages, allow_destroy: true
    # belongs_to :user
    validates_presence_of :sender_id,:recipient_id

    validates_uniqueness_of :sender_id, scope: :recipient_id
    validates_uniqueness_of :recipient_id, scope: :sender_id
    validate :validate_users_are_unique


    private

    def validate_users_are_unique
        if self.class.where(sender_id: sender_id, recipient_id: recipient_id)
            .or(self.class.where(sender_id: recipient_id, recipient_id: sender_id))
            .exists?
        errors.add(:base, 'User 1 and User 2 combination exists!')
        end

    end

    # def sort_user_ids
    #     self.sender_id, self.recipient_id = [sender_id, recipient_id]
    # end


end