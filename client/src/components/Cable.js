
import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';



function Cable ({conversations, handleReceivedMessage}) {


 
    return (
    //   this.props.userId 
    //   ? <ActionCable
    //         channel={{ 
    //           channel: 'ConversationsChannel'
    //         }}
    //         onReceived={(response) => this.handleReceivedConversation(response)}
    //     />
    //   : null
    <>
        {/* <Fragment>
      {conversations.map(conversation => {
        return (
          <ActionCable
            key={conversation.id}  
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment> */}
    </>
    );
  }


export default Cable;