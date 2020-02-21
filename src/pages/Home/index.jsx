import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Logo from '../../components/Logo';
import store from './store';
import './index.css';

export default () => {
  return (
    <store.Provider><Home /></store.Provider>
  );
}

function Home() {
  const [userState] = store.useModel('user')

  return (
    <View className="home">
      <Logo />
      <div>{userState.count}</div>
      <Text className="title">Welcome to Your Rax App</Text>
      <Text className="info">More information about Rax</Text>
      <Text className="info">Visit https://rax.js.org</Text>
      <Children />
    </View>
  );
}

function Children() {
  const { addCount, addCountAsync } = store.useModelActions('user');

  return (
    <View className="home">
      <Text
        onClick={() => {
          addCount(1);
        }}
      >+1 sync</Text>
      <Text
        onClick={() => {
          addCountAsync(1);
        }}
      >+1 Async</Text>
    </View>
  );
}