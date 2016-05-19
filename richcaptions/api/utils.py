from rest_framework import serializers
from django.forms.models import model_to_dict


def validate_against_model(attrs, ModelForm):
    """
    Perform Django model-based validation on the incoming POST/PUT data.
    This behavior is, unfortunately, not well defined in the Django REST Framework
    :param attrs:       The de-serialized API data
    :param ModelForm:  The model_form to
    :return:
    """
    Model = ModelForm.Meta.model
    instance = Model(**dict(attrs))
    form = ModelForm(model_to_dict(instance))
    if not form.is_valid():
        raise serializers.ValidationError(form.errors.as_data())
