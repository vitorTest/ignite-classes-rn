import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity key={skill} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    borderRadius: 50,
    backgroundColor: '#1f1e25',
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',

    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
