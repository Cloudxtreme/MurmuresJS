'use strict';
//debugger;

/**
 * @file SkillBehavior class. Part of the MurmuresJS project.
 * @author github.com/azziliz
 * @author github.com/thyshimrod
 * @license MIT
 */

/**
 * This class contains behaviors of the different skill.
 * The aim is to have a generic class, with static function receiving parameters to apply skill from source to target.
 * Mainly the skill would be applied to characters (attack, ranged-attack, healing spell, ...).
 *
 * @class
 */
murmures.SkillBehavior = {
  attack : function (source,target,skillTplate,params){
    if(skillTplate.custom.damage !== "undefined"){
      //TODO : apply damage to target
      target.hitPoints -= skillTplate.custom.damage;
      return true;
    }
    return false;
  },

  checkAttack : function(source,target,skillTplate,params){
    if(params.range !== "undefined"){
      return true;
    }

    return false;
  }
};
