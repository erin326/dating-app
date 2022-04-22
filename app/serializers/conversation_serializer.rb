class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :recipient_id
  has_many :messages
  has_one :sender
  has_one :recipient
  #  serializer: :ConversationUserSerializer
end
