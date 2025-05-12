// SplashScreen.js
import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native'; // StyleSheet를 import 했는지 확인

const DEEP_ORANGE = '#E87A00'; // 이 부분은 App.js에서 가져오거나 여기서 직접 정의할 수 있습니다.
                               // 만약 App.js의 DEEP_ORANGE를 사용하려면 props로 전달받거나 Context API 등을 사용해야 합니다.
                               // 여기서는 SplashScreen.js 내에 직접 정의된 것으로 가정합니다.

const SplashScreen = () => {
  return (
    <View style={styles.container}> {/* 여기서 styles.container 사용 */}
      <Image
        source={require('./assets/splash-icon.png')}
        style={styles.logo} // 여기서 styles.logo 사용
      />
      <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 20 }}/>
    </View>
  );
};

// 🔴🔴🔴 이 부분이 매우 중요합니다! 🔴🔴🔴
// styles 객체를 정의하는 부분입니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEEP_ORANGE, // DEEP_ORANGE 변수가 이 범위에서 접근 가능해야 합니다.
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  // 만약 텍스트 스타일이 필요하다면 여기에 추가할 수 있습니다.
  // text: {
  //   fontSize: 24,
  //   color: '#FFFFFF',
  //   marginBottom: 20,
  // },
});

export default SplashScreen;