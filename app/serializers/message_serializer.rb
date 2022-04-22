class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :body, :created_at
  has_one :user
  has_one :conversation
end
