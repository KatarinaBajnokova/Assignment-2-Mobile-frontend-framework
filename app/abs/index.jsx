import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskProvider } from './context/TaskContext';
import HomeScreen from './pages/HomeScreen';
import AddTaskScreen from './pages/AddTaskScreen';
import TaskDetailsScreen from './pages/TaskDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}