import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import ImageUploading from 'react-images-uploading';
import image from "./img/user.png"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    transform: scale(70%);
    width: 500px;
 `


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
    &::-webkit-input-placeholder{
        color: rgba(144, 145, 142, 0.5);
    } 
}`

const InputFieldName = styled(InputField) `{
    margin-top: 5%;
}`

const InputFieldLogin = styled(InputField) `{
    margin-top: 5%;
}`

const InputFieldPassword = styled(InputField) `{
    margin-top: 5%;
}`

const InputFieldPasswordAgain = styled(InputField) `{
    margin-top: 5%;
}`


const ButtonAP = styled.button`
    background: #E5E5E5;
    width: 150px;
    height: 30px;
    margin-left: 60px;
    margin-top:54px;
    margin-bottom: 60px;
    border: none;
    font-family: inherit;
    font-size: 15px;
    line-height: 30px;
    &:hover {background: rgba(144, 145, 142, 0.5);
    }
`;

const ButtonNS = styled.button`
    background: #FFFFFF;
    min-width: 150px;
    min-height: 40px;
    margin-top: 10px;
    margin-right: 35px;

    font-family: inherit;
    font-size: 20px;
    line-height: normal;
    border: 2px solid #CDFF64;
    &:hover {background: #CDFF64; color: white;
    }
`;

const ImageWrapper = styled.img`
    width: 50%
`

const TopBtns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    margin-left: 200px;
`
const BottButns = styled.div`
    display: flex;
    justify-content: right;
    // margin-right: 30px;
    margin-left: 460px;
`
const Photo = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 50px;
    border-radius: 50%;
`

function ProfileForm() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);}


    return(
        <div className="container">
            <div className="App">
                <TopBtns>
                    <Photo src={image}></Photo>
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
                            change a photo
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
                <InputFieldEmail type="text" placeholder="your_email@smth.com"/>
                <InputFieldName type="text" placeholder="name"/>
                <InputFieldLogin type="text" placeholder="login"/>
                <InputFieldLogin type="text" placeholder="dd/mm/yy of birth"/>
            </Form>

            <BottButns>
            <ButtonNS type="submit">save info</ButtonNS>
            </BottButns>

            <Form method="post">
                <InputFieldPassword type="password" placeholder="current password"/>
                <InputFieldPassword type="password" placeholder="new password"/>
                <InputFieldPasswordAgain type="password" placeholder="new password again"/>
            </Form>

            <BottButns>
            <ButtonNS type="submit">change password</ButtonNS>
            </BottButns>
        </div>



    )
}

export default ProfileForm;