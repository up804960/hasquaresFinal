'use strict';
goog.require('Blockly.Blocks');
goog.require('Blockly');

goog.provide('Blockly.Blocks.HaskTest');

Blockly.Blocks['haskTestCoreNum'] = {
  init: function() {
	this.setBlockClass (TypeClass[0])
  this.setOriginClass (TypeClass[0])
  this.trueContext ([['Num', 'a'], ['a','a','a']]);
  this.functionContext ([['Num', 'a'], ['a','a','a']]);
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
    this.setTooltip('Addition, (Typeclass: NUM)');
  }
};

Blockly.Blocks['haskTestInputNum'] = {
    init: function() {
		this.setBlockClass (TypeClass[0])
    this.setOriginClass (TypeClass[0])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("52");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Typeclass: NUM)');
    }
};

Blockly.Blocks['haskTestCoreReal'] = {
  init: function() {
	this.setBlockClass (TypeClass[1])
  this.setOriginClass (TypeClass[1])
  this.trueContext ([['Num', 'a'], ['a','a','a']])
  this.functionContext ([['Num', 'a'], ['a','a','a']])
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
    this.setTooltip('Subtraction, (Typeclass: Real)');
  }
};


Blockly.Blocks['haskTestInputReal'] = {
    init: function() {
		this.setBlockClass (TypeClass[1])
    this.setOriginClass (TypeClass[1])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("501");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Typeclass: Real)');
    }
};

Blockly.Blocks['haskTestInputRealFrac'] = {
    init: function() {
		this.setBlockClass (TypeClass[5])
    this.setOriginClass (TypeClass[5])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("255");
       this.setOutput(true, this.blockClass);
       this.setColour(this.blockClass[4]);
       this.setTooltip('Input, (Typeclass: RealFrac)');
    }
};

Blockly.Blocks['haskTestCoreEnum'] = {
  init: function() {
	this.setBlockClass (TypeClass[3])
  this.setOriginClass (TypeClass[3])
  this.trueContext ([['Enum', 'a'], ['a','a',['a']]])
  this.functionContext ([['Enum', 'a'], ['a','a',['a']]])
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("enumFromTo");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField(" ");
    this.setInputsInline(true);
    this.setOutput(true, ["List", this.blockClass])
    this.setColour(this.blockClass[4]);
    this.setTooltip('enumFromTo, (Typeclass: Enum, Output: [a])');
  }
};

Blockly.Blocks['haskTestInputEnum'] = {
    init: function() {
		this.setBlockClass (TypeClass[3])
    this.setOriginClass (TypeClass[3])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("1047");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Typeclass: Enum)');
    }
};

Blockly.Blocks['haskTestInputIntegral'] = {
    init: function() {
		this.setBlockClass (TypeClass[4])
    this.setOriginClass (TypeClass[4])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("404");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Typeclass: Integral)');
    }
};

Blockly.Blocks['haskTestCoreIntegral'] = {
  init: function() {
	this.setBlockClass (TypeClass[4])
  this.setOriginClass (TypeClass[4])
  this.trueContext ([['Integral', 'a'], ['a','a','a']])
  this.functionContext ([['Integral', 'a'], ['a','a','a']])
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("div");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField(" ");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
    this.setTooltip('Integer Division, (Typeclass: Integral)');
  }
};

Blockly.Blocks['haskTestInputRealFloat'] = {
    init: function() {
		this.setBlockClass (TypeClass[7])
    this.setOriginClass (TypeClass[7])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("2.66");
       this.setOutput(true, this.blockClass);
       this.setColour(this.blockClass[4]);
       this.setTooltip('Input, (Typeclass: RealFloat)');
    }
};

Blockly.Blocks['haskTestCoreFractional'] = {
  init: function() {
	this.setBlockClass (TypeClass[2])
  this.setOriginClass (TypeClass[2])
  this.trueContext ([['Fractional', 'a'], ['a','a','a']])
  this.functionContext ([['Fractional', 'a'], ['a','a','a']])
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("/");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
    this.setTooltip('Floating point division, (Typeclass: Fractional)');
  }
};

Blockly.Blocks['haskTestCoreFloating'] = {
  init: function() {
	this.setBlockClass (TypeClass[7])
  this.setOriginClass (TypeClass[7])
  this.trueContext ([['Floating', 'a'], ['a','a','a']])
  this.functionContext ([['Floating', 'a'], ['a','a','a']])
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("/");
    this.setInputsInline(true);
    this.setOutput(true, this.blockClass)
    this.setColour(this.blockClass[4]);
    this.setTooltip('Floating point division, (Typeclass: Floating)');
  }
};

Blockly.Blocks['haskTestInputInt'] = {
    init: function() {
		this.setBlockClass (DataType[0])
    this.setOriginClass (DataType[0])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("800");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Datatype: Int)');
    }
};

Blockly.Blocks['haskTestInputInteger'] = {
    init: function() {
		this.setBlockClass (DataType[1])
    this.setOriginClass (DataType[1])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("256");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Datatype: Integer)');
    }
};

Blockly.Blocks['haskTestInputFloat'] = {
    init: function() {
		this.setBlockClass (DataType[2])
    this.setOriginClass (DataType[2])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("4.1");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Datatype: Float)');
    }
};

Blockly.Blocks['haskTestInputDouble'] = {
    init: function() {
		this.setBlockClass (DataType[3])
    this.setOriginClass (DataType[3])
        this.appendValueInput('VALUE')
            .setCheck(['Null'])
            .appendField("10.101");
		this.setOutput(true, this.blockClass);
		this.setColour(this.blockClass[4]);
    this.setTooltip('Input, (Datatype: Double)');
    }
};

//Test Blocks, Not implemented
Blockly.Blocks['haskTestList'] = {
  init: function() {
	this.setBlockClass (["List", [undefined]])
  this.trueContext (["a"]);
  this.functionContext (["a"]);
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("");
    this.appendValueInput("inputR")
        .setCheck(this.blockClass)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, ["List", ["a"]])
    this.setColour(this.blockClass[4]);
    this.setTooltip('List (EXPERIMENTAL), (Typeclass: [a])');
  }
};

Blockly.Blocks['haskTestFromIntegral'] = {
  init: function() {
	this.setBlockClass (TypeClass[4])
  this.setOriginClass (TypeClass[4])
  this.trueContext ([["Integral", "a", "Num", "b"], ["a", "b"] ]);
  this.functionContext ([["Integral", "a", "Num", "b"], ["a", "b"] ]);
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("fromIntegral");
    this.setInputsInline(true);
    this.setOutput(true, TypeClass[0])
    this.setColour(this.blockClass[4]);
    this.setTooltip('fromIntegral, (Typeclass: Integral (Outputs Num))');
  }
};

Blockly.Blocks['haskTestToInteger'] = {
  init: function() {
	this.setBlockClass (TypeClass[4])
  this.setOriginClass (TypeClass[4])
  this.trueContext ([["Integral", "a"], ["a", "Integer"] ]);
  this.functionContext ([["Integral", "a"], ["a", "Integer"] ]);
    this.appendValueInput("inputL")
        .setCheck(this.blockClass)
        .appendField("toInteger");
    this.setInputsInline(true);
    this.setOutput(true, DataType[1])
    this.setColour(this.blockClass[4]);
    this.setTooltip('toInteger, (Typeclass: Integral (Outputs Integer))');
  }
};
