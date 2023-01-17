import {
  Text,
  View,
  VStack,
  HStack,
  Image,
  Box,
  Button,
  Input,
  Pressable,
  ScrollView,
  useToken,
} from 'native-base';
import {Edit2} from 'react-native-feather';
import React, {useEffect, useState} from 'react';
import {Eye, EyeOff} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import http from '../helpers/http';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import jwt_decode from 'jwt-decode';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
import lion from '../images/imgLionKing.png';
import user from '../images/user.png';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  //FETCHING PROFILE ID
  const [profile, setProfile] = React.useState({});
  const token = useSelector(state => state.auth.token);
  const fetchProfile = async () => {
    try {
      const response = await http(token).get('/profile');
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token, messageUpload]);

  //schema change password
  const changePasswordSchema = Yup.object().shape({
    password: Yup.string()
      .password()
      .min(6, 'Password must be at least 6 characters')
      .minLowercase(1, 'Password must have at least one lowercase letter')
      .minUppercase(1, 'Password must have at least one uppercase letter')
      .minNumbers(1, 'Password must have at least one number')
      .minSymbols(1, 'Password must have at least one symbol')
      .required('Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),
  });
  //GET DATA FOR UPDATE PROFILE
  const [fullName, setFullName] = useState('');
  const firstName = String(fullName).split(' ')[0];
  const lastName = String(fullName).split(' ').slice(1).join(' ');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  //PATCH UPDATE DATA
  const [successMessage, setSuccessMessage] = React.useState('');

  const updateDataUser = async () => {
    try {
      const response = await http(token).patch('/profile/updated', {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      setSuccessMessage('Data updated');
      setTimeout(() => {}, 3000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //PATCH NEW PASSWORD
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const handleUpdatePassword = async values => {
    try {
      const {password, confirmPassword} = values;
      const response = await http(token).patch('/profile/updated', {
        password,
      });
      setPasswordSuccess('Password updated');
      setTimeout(() => {}, 3000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //OPEN GALERY
  const [toggle, setToggle] = React.useState(false);
  const [preview, setPreview] = React.useState({});
  const openGallery = async () => {
    const result = await launchImageLibrary();
    const ObjImage = result.assets[0];
    setPreview(ObjImage);
  };
  //OPEN CAMERA
  const openCamera = async () => {
    const result = await launchCamera();
    const ObjImage = result.assets[0];
    setPreview(ObjImage);
  };
  //HANDLE UPLOAD
  const [messageUpload, setMessageUpload] = React.useState(false);
  const uploadImage = async () => {
    try {
      if (preview?.fileName) {
        const obj = {
          name: preview.fileName,
          type: preview.type,
          uri: preview.uri,
        };
        const form = new FormData();
        form.append('picture', obj);
        const {data} = await http(token).patch('/profile/updated', form, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        });
        setMessageUpload(data.message);
        setTimeout(() => {
          setMessageUpload(false);
          fetchProfile();
          setPreview({})
        }, 3000);
      } else {
        alert('Please choose image first');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Navbar />
      <VStack bg="#E5E5E5">
        <HStack
          justifyContent="space-around"
          bg="#C539B4"
          p="5"
          borderBottomRadius="20">
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            bgColor="#C539B4">
            <Text
              color="white"
              fontWeight="bold"
              fontSize="lg"
              pb="2"
              borderBottomColor="white"
              borderBottomWidth="3">
              Details Account
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('History')}
            bgColor="#C539B4">
            <Text color="#AAAAAA" fontWeight="bold" fontSize="lg">
              Order History
            </Text>
          </Pressable>
        </HStack>
      </VStack>
      <VStack bg="#E5E5E5" px="3" py="5" space="5">
        <VStack bg="white" borderRadius="10" space="3">
          <Text fontSize="lg" p="5">
            INFO
          </Text>
          <VStack alignItems="center" space="3" position="relative">
            <Box shadow="9">
              {profile?.picture ? (
                <Image
                  source={{uri: profile?.picture}}
                  alt="profile"
                  width="100"
                  height="100"
                  borderRadius="full"
                  shadow="9"
                />
              ) : (
                <Image
                  source={user}
                  alt="profile"
                  width="100"
                  height="100"
                  borderRadius="full"
                  shadow="9"
                />
              )}
              <Pressable
                onPress={() => setToggle(!toggle)}
                left="90"
                position="absolute"
                bottom="0">
                <Edit2 color="black" />
              </Pressable>
            </Box>
            {preview.uri && (
              <Image
                source={{uri: preview.uri}}
                alt="profile"
                width="100"
                height="100"
                borderRadius="full"
              />
            )}

            {toggle && (
              <VStack space="3">
                <HStack space="3">
                  <Button
                    onPress={openGallery}
                    borderRadius="10"
                    bgColor="#C539B4">
                    <Text fontSize="md" fontWeight="bold" color="white">
                      Open Gallery
                    </Text>
                  </Button>
                  <Button
                    onPress={openCamera}
                    borderRadius="10"
                    bgColor="#C539B4">
                    <Text fontSize="md" fontWeight="bold" color="white">
                      Open Camera
                    </Text>
                  </Button>
                </HStack>
                <Button
                  onPress={uploadImage}
                  borderRadius="10"
                  bgColor="#C539B4">
                  <Text fontSize="md" fontWeight="bold" color="white">
                    Upload
                  </Text>
                </Button>
              </VStack>
            )}
            {messageUpload && (
              <Text fontSize="lg" fontWeight="bold" color="green.500">
                {messageUpload}
              </Text>
            )}
            <Text fontSize="xl" fontWeight="bold">
              {profile?.firstName} {profile?.lastName}
            </Text>
            <Text color="#4E4B66">Moviegoers</Text>
          </VStack>
          <Box borderWidth="1" borderColor="#DEDEDE"></Box>
          <Box alignItems="center" p="5">
            <Button
              width="50%"
              borderRadius="10"
              bgColor="#C539B4"
              onPress={() => dispatch(logout())}>
              <Text fontSize="lg" fontWeight="bold" color="white">
                Log out
              </Text>
            </Button>
          </Box>
        </VStack>
        <Text fontSize="2xl" fontWeight="bold">
          Account Settings
        </Text>
        <VStack bg="white" p="5" borderRadius="10" space="5">
          <VStack space="2">
            <Text fontSize="lg">Details Information</Text>
            <Box borderWidth="1" borderColor="#DEDEDE"></Box>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Full Name</Text>
            <Input
              onChangeText={value => setFullName(value)}
              onFocus={() => setSuccessMessage('')}
              defaultValue={`${profile?.firstName} ${profile?.lastName}`}
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">E-mail</Text>
            <Input
              onChangeText={value => setEmail(value)}
              onFocus={() => setSuccessMessage('')}
              defaultValue={profile?.email}
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
          <VStack space="2">
            <Text fontSize="lg">Phone Number</Text>

            <Input
              defaultValue={profile.phoneNumber}
              onChangeText={value => setPhoneNumber(value)}
              onFocus={() => setSuccessMessage('')}
              borderColor="black"
              borderRadius="10"></Input>
          </VStack>
        </VStack>
        {successMessage && (
          <Text color="green.500" textAlign="center" fontSize="lg">
            {successMessage}
          </Text>
        )}
        <Button
          mb="10"
          onPress={updateDataUser}
          borderRadius="10"
          fontWeight="bold"
          fontSize="3xl"
          bgColor="#C539B4">
          <Text fontSize="lg" fontWeight="bold" color="white">
            Update Changes
          </Text>
        </Button>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={changePasswordSchema}
          onSubmit={values => handleUpdatePassword(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <VStack space="5">
              <VStack bg="white" p="5" borderRadius="10" space="5">
                <VStack space="2">
                  <Text fontSize="lg">Account and Privacy</Text>
                  <Box borderWidth="1" borderColor="#DEDEDE"></Box>
                </VStack>
                <VStack space="2">
                  <Text fontSize="lg">New Password</Text>
                  <Box position="relative">
                    <Input
                      onFocus={() => setPasswordSuccess('')}
                      name="password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      type={showPassword ? 'text' : 'password'}
                      borderColor="black"
                      placeholder="Write your new password"
                      borderRadius="10"></Input>
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <Eye
                          color="black"
                          position="absolute"
                          style={{bottom: 10, right: 20}}
                        />
                      ) : (
                        <EyeOff
                          color="black"
                          position="absolute"
                          style={{bottom: 10, right: 20}}
                        />
                      )}
                    </Pressable>
                    {errors.password && touched.password ? (
                      <Text color="red.500">{errors.password}</Text>
                    ) : null}
                  </Box>
                  <Text fontSize="lg">Confirm Password</Text>
                  <Box position="relative">
                    <Input
                      name="confirmPassword"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      type={showPassword2 ? 'text' : 'password'}
                      borderColor="black"
                      onFocus={() => setPasswordSuccess('')}
                      placeholder="Write your confirm password"
                      borderRadius="10"></Input>
                    <Pressable onPress={() => setShowPassword2(!showPassword2)}>
                      {showPassword2 ? (
                        <Eye
                          color="black"
                          position="absolute"
                          style={{bottom: 10, right: 20}}
                        />
                      ) : (
                        <EyeOff
                          color="black"
                          position="absolute"
                          style={{bottom: 10, right: 20}}
                        />
                      )}
                    </Pressable>
                  </Box>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Text color="red.500">{errors.confirmPassword}</Text>
                  ) : null}
                </VStack>
              </VStack>
              {passwordSuccess && (
                <Text color="green.500" textAlign="center" fontSize="lg">
                  {passwordSuccess}
                </Text>
              )}

              <Button
                onPress={handleSubmit}
                mb="10"
                borderRadius="10"
                fontWeight="bold"
                fontSize="3xl"
                bgColor="#C539B4">
                <Text fontSize="lg" fontWeight="bold" color="white">
                  Update Changes
                </Text>
              </Button>
            </VStack>
          )}
        </Formik>
      </VStack>
      <Footer />
    </ScrollView>
  );
};

export default Profile;
