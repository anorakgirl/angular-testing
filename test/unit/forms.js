describe('Forms', function() {

  var $rootScope, $compile, $timeout;

  beforeEach(module('forms'));
  beforeEach(module('ngTemplates'));


  beforeEach(inject(function(_$compile_,_$rootScope_, _$timeout_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $timeout = _$timeout_;
  }));


  it('Label CSS should change on focus and blur', function() {
    var scope = $rootScope.$new();

    scope.data = "Original Field Value";
    scope.label = "Field Name";


    var element = $compile("<demo-form-field data='data' label='label'></demo-form-field>")(scope);
    scope.$digest();

    var fieldLabel = element.find('label');

    var input = element.find('input');
    expect(fieldLabel.text().trim()).to.equal('Field Name');

    var fieldAsElement = angular.element(input);

    fieldAsElement.triggerHandler('focus');
    expect(fieldLabel.hasClass('focus')).to.be.true;
    expect(fieldLabel.hasClass('blur')).to.be.false;

    fieldAsElement.triggerHandler('blur');
    expect(fieldLabel.hasClass('focus')).to.be.false;
    expect(fieldLabel.hasClass('blur')).to.be.true;

  });

  it('Scope data should update when field changed', function() {
    var scope = $rootScope.$new();

    scope.data = "Original Field Value";
    scope.label = "Field Name";


    var element = $compile("<demo-form-field data='data' label='label'></demo-form-field>")(scope);
    scope.$digest();

    var fieldLabel = element.find('label');

    var input = element.find('input');
    expect(fieldLabel.text().trim()).to.equal('Field Name');

    var fieldAsElement = angular.element(input);

    fieldAsElement.val('New Value');
    fieldAsElement.triggerHandler('change');
    
    //the test fails without this line due to debounce setting delaying model update.
    $timeout.flush();

    expect(scope.data).to.equal("New Value");



  });

});

