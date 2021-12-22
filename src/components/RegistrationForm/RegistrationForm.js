import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import ImageUploading from 'react-images-uploading';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    transform: scale(80%)
 `;


const InputField= styled.input`{
    font-family: inherit;
    height: 50px;
    border: none;
    border-bottom: 2px solid rgb(2, 2, 2);
    background: transparent;
    outline: 0;
    font-size: 25px;
    line-height: 37px;
    &::placeholder {
        color: #181818;
      }
    &:focus::placeholder {
        color: transparent;
    }

`;

const InputFieldEmail = styled(InputField) `{
    color: #E5E5E5;
}`

const InputFieldName = styled(InputField) `{
    margin-top: 10%;
}`

const InputFieldLogin = styled(InputField) `{
    margin-top: 10%;
}`

const InputFieldPassword = styled(InputField) `{
    margin-top: 10%;
}`

const InputFieldPasswordAgain = styled(InputField) `{
    margin-top: 10%;
}`

const ButtonP = styled.button`
    background: #E5E5E5;
    width: 60px;
    height: 60px;
    margin-left:auto;
    margin-top:54px;
    border: none;
    font-family: inherit;
    font-size: 30px;
    line-height: 37px;
    color: white;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`;

const ButtonAP = styled.button`
    background: #FFFFFF;
    width: 110px;
    height: 30px;
    margin-left: auto;
    margin-top:54px;
    font-family: inherit;
    font-size: 15px;
    line-height: normal;
    border: 2px solid #CDFF64;
    &:hover {background: #CDFF64; color: white;
    }
`;

const ButtonNS = styled.button`
    background: #E5E5E5;
    width: 150px;
    height: 40px;
    margin-top:54px;
    border: none;
    font-family: inherit;
    font-size: 20px;
    line-height: 37px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`;

const ImageWrapper = styled.img`
    width: 50%
`

const TopBtns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
`
const BottButns = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 30px;
`
const As = styled.a`
  text-decoration: none;
  color: inherit;
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

      <TopBtns>
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
              <ButtonP
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                +
              </ButtonP>
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
              <ButtonAP
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                add a photo
              </ButtonAP>
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

      </TopBtns>

      

    </div>
        <Form method="post">
            <InputFieldEmail type="text" placeholder="email"/>
            <InputFieldName type="text" placeholder="name"/>
            <InputFieldLogin type="text" placeholder="login"/>
            <InputFieldPassword type="password" placeholder="password"/>
            <InputFieldPasswordAgain type="password" placeholder="password again"/>
        </Form>
        <BottButns>
          <ButtonNS type="submit"><As href="/signup2">next step</As></ButtonNS>
        </BottButns>
        
        </div>
    )
}

export default RegistarationForm;