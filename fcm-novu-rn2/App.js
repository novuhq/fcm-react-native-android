import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Request permission
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);

          // Grab FCM token
          const token = await messaging().getToken();
          console.log('FCM Token is:', token);

          // Check initial notification (can be used when you want the app to perform specific actions when it is opened due to a notification)
          const initialNotification = await messaging().getInitialNotification();
          if (initialNotification) {
            console.log('App opened from quit state because of...', initialNotification.notification);
          }

          // Background handler
          messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
          });

          // Listening to messages in foreground
          const unsubscribe = messaging().onMessage(async remoteMessage => {
            // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            console.log('workingf~~!!!!')
            setNotification(remoteMessage); // Update state with the received message


          });

          return unsubscribe;
        } else {
          console.log('Could not grab token...', authStatus);
        }
      } catch (error) {
        console.error('Error during app initialization:', error);
      }
    };

    // Initialize the app
    initializeApp();
  }, []);
  console.log(notification)
  return (
    <View style={styles.container}>
      <Text>FCM Notification Details:</Text>
      {notification && (
        <View>
          <Text>Title: {notification?.notification?.title}</Text>
          <Text>Body: {notification?.notification?.body}</Text>
          <Text>Subscriber status: {notification?.data?.subStatus}</Text>
          <Text>Priority: {notification?.notification?.android?.priority}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
