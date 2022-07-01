import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
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
