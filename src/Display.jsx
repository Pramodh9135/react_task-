import { EditOutlined, DeleteOutlined, HeartOutlined,HeartFilled } from '@ant-design/icons';
import {  Card } from 'antd';
const { Meta } = Card;
const Display = (props) => (
 
<>

<div className='container'>
  
  {props.data.map((x)=>{
    return(
      
        <Card 
    style={{
      width: 300,
      marginTop:"20px"
    }}
    cover={
      <img style={{backgroundColor:"#F5F5F5",height:"35vh"}}
        alt="example"
        src={`https://avatars.dicebear.com/v2/avataaars/{${x.username}}.svg?options[mood][]=sad`}
      />
    }
    actions={[ 
      <HeartFilled key="like"   />,
      <EditOutlined key="edit" />,
      <DeleteOutlined key="delete" />,
      
    ]}
  >
    
      
    <div>
      {`${x.username}`}
      <br />
      {`${x.email}`}
      <br/>
      {`${x.phone}`}
      <br />
      {`${x.website}`}
    </div>
  </Card>
      
    )
  })}
  
  </div>
  </>
);
export default Display;