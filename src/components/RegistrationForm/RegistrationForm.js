import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import ImageUploading from 'react-images-uploading';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top: 101px;
 `;


const InputField= styled.input`{
    font-family: inherit;
    height: 50px;
    border: none;
    border-bottom: 2px solid rgb(2, 2, 2);
    background: transparent;s
    outline:0;
    font-size:30px;
    line-height: 37px;
    &::placeholder {
        color: #181818;
      }
    &:focus::placeholder {
        color: transparent;
    }

`;

const InputFieldEmail = styled(InputField) `{
    margin-top: 88px;
}`

const InputFieldName = styled(InputField) `{
    margin-top: 88px;
}`

const InputFieldLogin = styled(InputField) `{
    margin-top: 88px;
}`

const InputFieldPassword = styled(InputField) `{
    margin-top: 88px;
}`

const InputFieldPasswordAgain = styled(InputField) `{
    margin-top: 88px;
}`

const Button = styled.button`
    background: #E5E5E5;
    width: 175px;
    height: 58px;
    margin-left:auto;
    margin-top:54px;
    border: none;
    font-family: inherit;
    font-size: 30px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`;
const ImageWrapper = styled.img`
    width: 50%
`


function RegistarationForm() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);}


    return(
        <div className="container">
            <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <ImageWrapper src={image['data_url']} alt=""  />
                <div className="image-item__btn-wrapper">
        
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
        <Form method="post">
            <InputFieldEmail type="text" placeholder=""/>
            <InputFieldName type="text" placeholder="name"/>
            <InputFieldLogin type="text" placeholder="login"/>
            <InputFieldPassword type="password" placeholder="password"/>
            <InputFieldPasswordAgain type="password" placeholder="password again"/>
        </Form>
        <Button type="submit">next step</Button>
        </div>
    )
}

export default RegistarationForm;