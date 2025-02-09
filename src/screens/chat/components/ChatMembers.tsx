import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getWidth, colors} from '../../../constants/Index';
import man from '../../../assets/images/test/man.png';
import woman from '../../../assets/images/test/woman.png';

const ChatMembers = ({member}: any) => {
  console.log('member=', member);

  return (
    <>
      <View style={styles.members}>
        <View>
          <Image style={styles.manPhoto} source={{uri: member.profileImg}} />
          <View>
            <Text style={styles.profileName}>{member.nickName}</Text>
            <View style={styles.memberInfo}>
              <Text>{member.mbti}</Text>
              <Text>/</Text>
              <Text>{member.universeName}</Text>
            </View>
          </View>
        </View>

        {/* <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View style={styles.memberInfo}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.manPhoto} source={man} />
          <View>
            <Text style={styles.profileName}>김민수</Text>
            <View style={styles.memberInfo}>
              <Text>#ENTJ12</Text>
              <Text>/</Text>
              <Text>고려대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View style={styles.memberInfo}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.manPhoto} source={man} />
          <View>
            <Text style={styles.profileName}>김민수</Text>
            <View style={styles.memberInfo}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>고려대</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.womanPhoto} source={woman} />
          <View>
            <Text style={styles.profileName}>김지은</Text>
            <View style={styles.memberInfo}>
              <Text>#ENTJ</Text>
              <Text>/</Text>
              <Text>연세대</Text>
            </View>
          </View>
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  members: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  manPhoto: {
    borderRadius: 100,
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  womanPhoto: {
    borderRadius: 100,
    height: getWidth(120),
    width: getWidth(120),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#FFBAD6',
  },
  profileName: {
    marginLeft: 30,
  },
  memberInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default ChatMembers;
